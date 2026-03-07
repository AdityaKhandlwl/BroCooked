"use client";

import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
import React, { useState } from "react";
import { AddToPantryModal } from "@/components/AddToPantryModal";

const PantryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({
    name: "",
    quantity: "",
  });

  const handleModalSuccess = () => {

  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-16 px-40">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-16 h-16 text-orange-600" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
                  My Pantry
                </h1>
                <p className="text-stone-600 font-light">
                  Manage your ingredients and discover what you can cook
                </p>
              </div>
            </div>
            {/* Add to Pantry Button - Desktop */}
            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white gap-2"
              size="lg"
            >
              <Plus className="w-5 h-5" />
              Add to Pantry
            </Button>
          </div>
        </div>
      </div>
      {/* Add to pantry modal */}
      <AddToPantryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default PantryPage;
