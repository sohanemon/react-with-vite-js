import { useState } from "react";

const Pricing = () => {
  const [selected, setSelected] = useState();
  return (
    <section className=''>
      <h1 className='text-5xl text-gray-500 font-semibold  text-center my-10'>
        Our Best Deals
      </h1>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-10 '
      >
        {data.map(({ price, title, description }) => (
          <div
            key={price}
            className={`relative ${
              selected === price ? "bg-indigo-900" : "bg-slate-800"
            } rounded-xl shadow-sm my-10 max-w-sm min-w-[300px] min-h-[500px]   text-center px-10 mx-auto mt-10 hover:shadow-xl`}
          >
            <h1 className='text-4xl font-semibold text-gray-400 py-8 capitalize'>
              {title}
            </h1>
            <h2 className='text-5xl font-bold text-gray-200'>
              ${price}
              <span className='text-xl text-gray-400'>/mon</span>
            </h2>
            <br />
            <section className='text-left text-xl text-gray-400 tracking-widest py-4'>
              <h1>Features: </h1>
              <ul className='list-decimal list-inside'>
                {description?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </section>
            <button
              onClick={() => setSelected(price)}
              className={` px-6 py-3 ${
                selected === price ? "bg-indigo-700" : "bg-gray-900"
              } rounded-md font-semibold text-gray-200 absolute -translate-x-1/2 bottom-10`}
            >
              {selected === price ? "Selected" : "Select This"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

const data = [
  { title: "free", price: 0, description: ["good", "better", "best"] },
  { title: "professional", price: 99, description: ["good", "better", "best"] },
  { title: "premium", price: 199, description: ["good", "better", "best"] },
];
