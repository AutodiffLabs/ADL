import React from 'react';
import { GitHubFile } from '@/types';
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { marked } from 'marked'
import { USER_NAME, REPO, DOC_FOLDER } from '@/constants';

const DocsPage: React.FC = () => {
  const { file } = useParams<{ file?: string }>()
  const navigate = useNavigate()
  const [files, setFiles] = useState<GitHubFile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFiles() {
      const repo = `${USER_NAME}/${REPO}`  // Replace with your repo
      const folder = DOC_FOLDER                   // Folder inside repo
      const res = await fetch(`https://api.github.com/repos/${repo}/contents/${folder}`)
      const data = await res.json()

      // Filter only markdown files
      const markdownFiles = data.filter((f: any) => f.name.endsWith('.md'))

      const contentPromises = markdownFiles.map(async (f: any) => {
        const fileRes = await fetch(f.download_url)
        const raw = await fileRes.text()
        return {
          name: f.name,
          content: marked(raw)
        }
      })

      const allFiles = await Promise.all(contentPromises)
      setFiles(allFiles)
      setLoading(false)

      // Default to overview.md if no file selected
      if (!file) {
        const overview = allFiles.find(f => f.name === 'overview.md')
        if (overview) navigate(`/docs/overview.md`, { replace: true })
      }
    }

    fetchFiles()
  }, [file, navigate])

  if (loading) return <div>Loading...</div>

  const selected = files.find(f => f.name === file)

  return (
    <div className="flex min-h-[80vh]">
      {/* Sidebar */}
      <nav className="w-64 border-r border-gray-200 p-4">
        <h3 className="font-semibold mb-4">Documentation</h3>
        <ul className="flex flex-col gap-2">
          {files.map(f => (
            <li key={f.name}>
              <Link
                to={`/docs/${f.name}`}
                className={`block px-2 py-1 rounded hover:bg-gray-100 ${
                  f.name === file ? 'bg-gray-100 font-bold' : ''
                }`}
              >
                {f.name.replace('.md', '')}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {selected ? (
          <div dangerouslySetInnerHTML={{ __html: selected.content }} />
        ) : (
          <div>Select a file from the sidebar</div>
        )}
      </main>
    </div>
  )
}

export default DocsPage