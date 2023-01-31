import React, { useState } from "react";

export function Rating() {

  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
  }

  function handleRatingSubmitted(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className="bg-[#1e242e] p-10 rounded-3xl w-[400px] h-[360px] text-center flex flex-col items-center">

      <img className="" src="/images/illustration-thank-you.svg" alt="star" />

      <div className="bg-[#272e3f] rounded-2xl p-2 px-4 mt-3 mb-1">
        <p className="text-[#fb7b19]">You selected {selectedRating} out of 5</p>
      </div>

      <h1 className="text-white text-4xl my-2">Thank you!</h1>

      <p className="text-[#8e949e] text-[13px]">We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!</p>

    </div>
  ) : (
    <form onSubmit={handleRatingSubmitted} className="bg-[#1e242e] p-10 rounded-3xl w-[400px] h-[360px] text-left">
      
      <img className="bg-[#272e3f] rounded-full p-3" src="/images/icon-star.svg" alt="star" />
      <h1 className="text-white text-4xl mb-2">How did you do?</h1>
      <p className="text-[#8e949e] text-[13px]">Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!</p>

      <div className="flex justify-center space-x-4 my-6">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button type="button" onClick={() => handleRatingClicked(rating)} className="bg-[#292e38] text-white p-3 px-5 rounded-full hover:bg-[#7d8796] focus:bg-[#fb7b19] duration-150">{rating}</button>
        ))}
      </div>


      <button type="submit" disabled={selectedRating === undefined} className="w-full rounded-3xl py-[10px] font-semibold text-white bg-[#fb7b19] duration-300 hover:text-[#fb7b19] hover:bg-white">Submit</button>
    </form>
  )
}