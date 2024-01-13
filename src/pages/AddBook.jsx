/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAddBookMutation } from "../features/booksslice";
import { useNavigate } from "react-router-dom";


export default function AddBook() {
    const navigate =useNavigate()
    const [book, setBook] = useState({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
    });
    const [isChecked, setChecked] = useState(false);
    const [addbook, { isLoading, isSuccess, isError }]= useAddBookMutation();
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setBook((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    addbook({...book, featured: isChecked});

    if(isSuccess){
        navigate("/")
    }

  }

  const handleCheckboxChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };
    console.log(isChecked)
  return (
    <main className="py-6 2xl:px-6">
    <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form onSubmit={handleSubmit} className="book-form">
                <div className="space-y-2">
                    <label htmlFor="lws-bookName">Book Name</label>
                    <input onChange={handleChange} required className="text-input" type="text" id="lws-bookName" name="name" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-author">Author</label>
                    <input onChange={handleChange} required className="text-input" type="text" id="lws-author" name="author" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-thumbnail">Image Url</label>
                    <input onChange={handleChange} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="lws-price">Price</label>
                        <input onChange={handleChange} required className="text-input" type="number" id="lws-price" name="price" />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-rating">Rating</label>
                        <input  onChange={handleChange}  required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                            max="5" />
                    </div>
                </div>

                <div className="flex items-center">
                    <input onChange={handleCheckboxChange}  id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
                    <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button disabled={isLoading} type="submit" className="submit" id="lws-submit">Add Book</button>
            </form>

            {isSuccess && <p className="text-green-500 text-center">Book Added Successfully</p>}
            {isError && <p className="text-red-500 text-center">Something went wrong</p>}
        </div>
    </div>
</main>
  )
}
