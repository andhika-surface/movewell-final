import { useState } from "react";
import { Tag, LogOut, Copy, Check, Download } from "lucide-react";
import PromoEditor from "./PromoEditor";
import { promosData } from "../../data/promos";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [promos, setPromos] = useState(promosData);
  const [copied, setCopied] = useState(false);

  const handleCopyJSON = () => {
    const jsonString = JSON.stringify(promos, null, 2);
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const jsonString = JSON.stringify(promos, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "promos.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a497f] rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Movewell Recovery Admin</h1>
                <p className="text-gray-600 text-sm">Content Management</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Title */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#1a497f] rounded-lg flex items-center justify-center">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">Promo Management</h2>
              <p className="text-gray-600 text-sm">Manage promotional offers and special rates</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="text-blue-900 mb-2">📝 Cara Menggunakan Admin Panel</h3>
          <ol className="text-blue-800 space-y-2 text-sm">
            <li><strong>1.</strong> Edit data promo menggunakan form di bawah</li>
            <li><strong>2.</strong> Klik tombol "Copy JSON" untuk menyalin hasil edit</li>
            <li><strong>3.</strong> Buka GitHub repository → folder /data → pilih file <code className="bg-blue-100 px-1 rounded">promos.ts</code></li>
            <li><strong>4.</strong> Klik tombol Edit (icon pensil) di GitHub</li>
            <li><strong>5.</strong> Cari baris <code className="bg-blue-100 px-1 rounded">export const promosData</code></li>
            <li><strong>6.</strong> Replace hanya bagian data (array/object) dengan JSON yang di-copy. Jangan hapus <code className="bg-blue-100 px-1 rounded">export const</code>!</li>
            <li><strong>7.</strong> Commit changes → Website akan auto-rebuild & deploy (1-2 menit)</li>
            <li><strong>8.</strong> Refresh browser untuk lihat perubahan (Ctrl+Shift+R jika perlu)</li>
          </ol>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3">
            <p className="text-yellow-800 text-sm mb-2">
              ⚠️ <strong>Penting:</strong> Edit file <code className="bg-yellow-100 px-1 rounded">.ts</code> (TypeScript), bukan <code className="bg-yellow-100 px-1 rounded">.json</code>
            </p>
            <p className="text-yellow-800 text-sm">
              Perubahan akan terlihat setelah website selesai rebuild (1-2 menit).
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleCopyJSON}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span>{copied ? "Copied!" : "Copy JSON"}</span>
          </button>
          <button
            onClick={handleDownloadJSON}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span>Download JSON</span>
          </button>
        </div>

        {/* Editor */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <PromoEditor promos={promos} setPromos={setPromos} />
        </div>

        {/* JSON Preview */}
        <div className="bg-gray-900 rounded-lg p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">JSON Preview</h3>
            <span className="text-gray-400 text-sm">promos.json</span>
          </div>
          <pre className="text-green-400 text-sm overflow-x-auto">
            {JSON.stringify(promos, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}