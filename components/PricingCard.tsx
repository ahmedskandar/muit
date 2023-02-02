function PricingCard() {
  return (
    <div
      className="text-white outline rounded-lg w-1/2 outline-[8px] outline-gray-300
            bg-gray-500 text-center py-6 md:w-1/4
        "
    >
      <h4>Basic</h4>
      <div className="mt-5 font-bold text-xl">100GB</div>
      <div>$1.99/month</div>
      <button className="mt-2 mb-9 py-1 px-3 border border-purple-800 rounded-md">
        Purchase
      </button>
      <hr />
      <div className="text-sm">
        <div className="mt-5 text-center">100GB storage</div>
        <div>Option to add members</div>
        <div>OExtra member benefits</div>
      </div>
    </div> 
  );
}

export default PricingCard;
