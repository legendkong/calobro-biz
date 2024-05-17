'use client';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import BackButton from '@/components/BackButton';
import { useState } from 'react';
import Header from '@/components/Header';

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    ingredients: '',
    category: '',
    helpswith: '',
    calories: '',
    carbs: '',
    fats: '',
    protein: '',
    method: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const supabase = createClient();
    const { data, error } = await supabase.from('recipe').insert([formData]);

    if (error) {
      console.error('Error inserting data:', error);
      return;
    }
    alert('Recipe uploaded successfully!');
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <BackButton />
          Upload Recipe Page
        </div>
      </nav>
      <div className="flex-1 flex flex-col gap-10 opacity-100 max-w-4xl w-full px-3 py-10">
        <Header />
        <div>
          <span className="font-bold">Company: </span>
          <span className="text-orange-500">
            BRASH BOYS LLP (Pastry and Coffee)
          </span>
        </div>
        <div className="-mt-5 mb-5">
          <span className="font-bold">ACRA no.: </span>
          <span className="text-orange-500">TLK12345678</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-200 rounded shadow-md p-8"
        >
          <label className="flex flex-col gap-2 text-orange-500">
            Title of the dish:
            <input
              type="text"
              name="title"
              placeholder="Enter title of the dish"
              onChange={handleChange}
              className="input input-bordered w-full p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Image URL:
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              onChange={handleChange}
              className="input input-bordered w-full p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Ingredients:
            <textarea
              name="ingredients"
              placeholder="List ingredients required to make the dish"
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-40 p-2"
            ></textarea>
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Category:
            <select
              name="category"
              onChange={handleChange}
              className="select select-bordered w-full  p-2"
            >
              <option value="">Select Category</option>
              <option value="Side dish">Side dish</option>
              <option value="Main dish">Main dish</option>
              <option value="Dessert">Dessert</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Health Benefits:
            <select
              name="helpswith"
              onChange={handleChange}
              className="select select-bordered w-full  p-2"
            >
              <option value="">Select Health Benefit</option>
              <option value="High in Protein">High in Protein</option>
              <option value="Low Sugar">Low Sugar</option>
              <option value="Lower cholesterol">Lower cholesterol</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Calories:
            <input
              type="text"
              name="calories"
              placeholder="Enter calories"
              onChange={handleChange}
              className="input input-bordered w-full  p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Carbs:
            <input
              type="text"
              name="carbs"
              placeholder="Enter carbs"
              onChange={handleChange}
              className="input input-bordered w-full  p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Fats:
            <input
              type="text"
              name="fats"
              placeholder="Enter fats"
              onChange={handleChange}
              className="input input-bordered w-full  p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Protein:
            <input
              type="text"
              name="protein"
              placeholder="Enter protein"
              onChange={handleChange}
              className="input input-bordered w-full  p-2"
            />
          </label>
          <label className="flex flex-col gap-2 text-orange-500">
            Method:
            <textarea
              name="method"
              placeholder="Describe the method used to make the dish"
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-40  p-2"
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn bg-orange-500 hover:bg-purple-500 btn-primary w-full p-3 rounded-md"
          >
            Upload Recipe
          </button>
        </form>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>As part of our FYP project</p>
      </footer>
    </div>
  );
}
