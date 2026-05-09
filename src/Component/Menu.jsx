import React, { useEffect, useState } from "react";

const Menu = () => {

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));

  }, []);

  // ADD TO CART

  const addToCart = (item) => {

    setCart((prev) => {

      const updatedCart = [...prev, item];

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;

    });

  };

  // REMOVE FROM CART

  const removeFromCart = (indexToRemove) => {

    setCart((prev) => {

      const updatedCart = prev.filter(
        (_, index) => index !== indexToRemove
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      return updatedCart;

    });

  };

  return (

    <div id="menu" className="py-10 bg-orange-100 min-h-screen">

      <div className="container mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-black">
            Our Menu
          </h1>

          <p className="text-gray-700 mt-3">
            Select your favorite food
          </p>

        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {products.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >

              {/* IMAGE */}

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}

              <div className="p-5">

                <h2 className="text-2xl font-bold mb-3">
                  {item.name}
                </h2>

                <p className="text-red-600 text-xl mb-4">
                  ₹ {item.price}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* CART SECTION */}

        <div className="mt-6 bg-white p-6 rounded-xl shadow-xl">

          <h1 className="text-3xl font-bold mb-6">
            Selected Items
          </h1>

          {cart.length === 0 ? (

            <p>No Item Selected</p>

          ) : (

            cart.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between border-b py-4"
              >

                <div className="flex items-center gap-4">

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  {/* INFO */}

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-red-600 text-xl">
                      ₹ {item.price}
                    </p>

                  </div>

                </div>

                {/* DELETE BUTTON */}

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
};

export default Menu;