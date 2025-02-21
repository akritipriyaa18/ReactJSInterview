import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import explorer from './data/folderData'
import Folder from './components/folder'
import useTraverseTree from './hooks/useTraverseTree'

export default function App() {

  const [explorerData, setExplorerData] = useState(explorer)
  const {insertNode} = useTraverseTree()

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)

    setExplorerData(finalTree)
  }

  return (
  <div className='App' >
    <Folder handleInsertNode = {handleInsertNode} explorer={explorerData}/>
  </div>
  )
}

