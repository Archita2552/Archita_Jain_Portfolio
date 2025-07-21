"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Eye, ZoomIn, ZoomOut, RotateCw } from "lucide-react"

interface PDFViewerProps {
  pdfUrl?: string
  fileName?: string
}

export function PDFViewer({
  pdfUrl = "/Archita-Resume.pdf",
  fileName = "Archita-Resume.pdf",
}: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [resolvedUrl, setResolvedUrl] = useState(pdfUrl)

  // Set absolute URL on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setResolvedUrl(`${window.location.origin}${pdfUrl}`)
    }
  }, [pdfUrl])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360)

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = resolvedUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base bg-transparent"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Resume
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            <DialogHeader className="p-4 border-b">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-lg font-semibold">Resume - {fileName}</DialogTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={handleZoomOut} disabled={zoom <= 50}>
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
                  <Button variant="ghost" size="sm" onClick={handleZoomIn} disabled={zoom >= 200}>
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleRotate}>
                    <RotateCw className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={downloadResume}>
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800">
              <div className="flex justify-center p-4">
                <div
                  className="bg-white shadow-lg transition-all duration-300"
                  style={{
                    transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                    transformOrigin: "center top",
                  }}
                >
                    <object
    data={`${resolvedUrl}#toolbar=0&navpanes=0&scrollbar=0`}
    type="application/pdf"
    width="595"
    height="842"
    className="border-0"
  >
    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
      PDF preview is not supported in your browser.
      <br />
      <a href={resolvedUrl} target="_blank" rel="noopener noreferrer" className="underline text-indigo-600">
        Click here to view the resume in a new tab.
      </a>
    </p>
  </object>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          size="lg"
          onClick={downloadResume}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Download Resume
        </Button>
      </div>
    </>
  )
}
