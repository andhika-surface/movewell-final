import { useState, useEffect } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import type { PromoData, Rate, VoucherPack } from "../../data/promos";

interface PromoEditorProps {
  promos: PromoData | null;
  setPromos: (promos: PromoData) => void;
}

export default function PromoEditor({ promos, setPromos }: PromoEditorProps) {
  const [formData, setFormData] = useState<PromoData | null>(null);

  useEffect(() => {
    if (promos) {
      setFormData(JSON.parse(JSON.stringify(promos)));
    }
  }, [promos]);

  if (!formData) {
    return <div className="text-gray-600">Loading promo data...</div>;
  }

  const handleSave = () => {
    setPromos(formData);
    alert("Changes saved! Don't forget to copy JSON and commit to GitHub.");
  };

  const addRate = () => {
    setFormData({
      ...formData,
      openingRates: [
        ...formData.openingRates,
        { duration: "", price: "", regularPrice: "" }
      ]
    });
  };

  const updateRate = (index: number, field: keyof Rate, value: string) => {
    const newRates = [...formData.openingRates];
    newRates[index] = { ...newRates[index], [field]: value };
    setFormData({ ...formData, openingRates: newRates });
  };

  const deleteRate = (index: number) => {
    setFormData({
      ...formData,
      openingRates: formData.openingRates.filter((_, i) => i !== index)
    });
  };

  const addVoucherPack = () => {
    setFormData({
      ...formData,
      voucherPacks: [
        ...formData.voucherPacks,
        { title: "", price: "", pricePerSession: "" }
      ]
    });
  };

  const updateVoucherPack = (index: number, field: keyof VoucherPack, value: string) => {
    const newPacks = [...formData.voucherPacks];
    newPacks[index] = { ...newPacks[index], [field]: value };
    setFormData({ ...formData, voucherPacks: newPacks });
  };

  const deleteVoucherPack = (index: number) => {
    setFormData({
      ...formData,
      voucherPacks: formData.voucherPacks.filter((_, i) => i !== index)
    });
  };

  const addFlexibility = () => {
    setFormData({
      ...formData,
      voucherFlexibility: [...formData.voucherFlexibility, ""]
    });
  };

  const updateFlexibility = (index: number, value: string) => {
    const newFlex = [...formData.voucherFlexibility];
    newFlex[index] = value;
    setFormData({ ...formData, voucherFlexibility: newFlex });
  };

  const deleteFlexibility = (index: number) => {
    setFormData({
      ...formData,
      voucherFlexibility: formData.voucherFlexibility.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-900">Manage Promo</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-gray-900 mb-4">Promo Header</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={formData.header.title}
              onChange={(e) => setFormData({
                ...formData,
                header: { ...formData.header, title: e.target.value }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={formData.header.subtitle}
              onChange={(e) => setFormData({
                ...formData,
                header: { ...formData.header, subtitle: e.target.value }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.header.location}
              onChange={(e) => setFormData({
                ...formData,
                header: { ...formData.header, location: e.target.value }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Period</label>
            <input
              type="text"
              value={formData.header.period}
              onChange={(e) => setFormData({
                ...formData,
                header: { ...formData.header, period: e.target.value }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Booking Info</label>
            <input
              type="text"
              value={formData.header.booking}
              onChange={(e) => setFormData({
                ...formData,
                header: { ...formData.header, booking: e.target.value }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Opening Rates */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Opening Rates</h3>
          <button
            onClick={addRate}
            className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Rate</span>
          </button>
        </div>

        <div className="space-y-3">
          {formData.openingRates.map((rate, index) => (
            <div key={index} className="grid grid-cols-4 gap-3 items-end">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Duration</label>
                <input
                  type="text"
                  value={rate.duration}
                  onChange={(e) => updateRate(index, "duration", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="30 minutes"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Promo Price</label>
                <input
                  type="text"
                  value={rate.price}
                  onChange={(e) => updateRate(index, "price", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="IDR 150K"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Regular Price</label>
                <input
                  type="text"
                  value={rate.regularPrice}
                  onChange={(e) => updateRate(index, "regularPrice", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="175k"
                />
              </div>
              <button
                onClick={() => deleteRate(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Voucher Packs */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Voucher Packs</h3>
          <button
            onClick={addVoucherPack}
            className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Pack</span>
          </button>
        </div>

        <div className="space-y-3">
          {formData.voucherPacks.map((pack, index) => (
            <div key={index} className="grid grid-cols-4 gap-3 items-end">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Title</label>
                <input
                  type="text"
                  value={pack.title}
                  onChange={(e) => updateVoucherPack(index, "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="10 sessions"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Price</label>
                <input
                  type="text"
                  value={pack.price}
                  onChange={(e) => updateVoucherPack(index, "price", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="IDR 1.4M"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Per Session</label>
                <input
                  type="text"
                  value={pack.pricePerSession}
                  onChange={(e) => updateVoucherPack(index, "pricePerSession", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="IDR 140k per session"
                />
              </div>
              <button
                onClick={() => deleteVoucherPack(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Voucher Flexibility */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Voucher Flexibility Options</h3>
          <button
            onClick={addFlexibility}
            className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Option</span>
          </button>
        </div>

        <div className="space-y-3">
          {formData.voucherFlexibility.map((option, index) => (
            <div key={index} className="flex gap-3 items-center">
              <input
                type="text"
                value={option}
                onChange={(e) => updateFlexibility(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="1 voucher = 30 min"
              />
              <button
                onClick={() => deleteFlexibility(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save All Changes</span>
        </button>
      </div>
    </div>
  );
}
