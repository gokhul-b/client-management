import { useState } from "react";

const AddVendors = () => {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [currentBrand, setCurrentBrand] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddBrands = () => {
    if (currentBrand.trim() !== "") {
      setBrands([...brands, currentBrand]);
      setCurrentBrand("");
    }
  };
  const handleAddProducts = () => {
    if (currentProduct.trim() !== "") {
      setProducts([...products, currentProduct]);
      setCurrentProduct("");
    }
  };
  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  const handleRemoveBrand = (index) => {
    const updatedBrands = [...brands];
    updatedBrands.splice(index, 1);
    setBrands(updatedBrands);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    //Name validation
    if (fullname == null || fullname === "") {
      alert("Name can't be blank");
    } else if (!fullname.match(/^[a-zA-Z\s]+$/)) {
      alert("Name is invalid!");
    }

    //Phone number validation
    if (!phoneNumber.match(/^\d{10}$/)) {
      alert("Invalid Phone number!");
    }

    //Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Invalid email address!");
    }

    //Address validation
    if (address == null || address === "") {
      alert("Please enter the address");
    }

    //City validation
    if (city == null || city === "") {
      alert("Please enter the city");
    }

    //Pincode Validation
    if (pincode.length !== 6) {
      setPincode("");
      alert("Invalid Pincode!");
    }
  };
  return (
    <div className="bg-slate-200">
      <div className="flex flex-col items-center justify-center md:h-full mx-auto px-6 py-8 lg:py-10">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 sm:p-8 space-y-4 md:space-y-6">
            <h1 className="mb-6 text-2xl font-semibold text-gray-900">
              Add Vendor
            </h1>
            <form className="space-y-4 md:space-y-6">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required=""
              />
              <input
                type="tel"
                name="phonenumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Email"
              />
              <input
                type="textarea"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                required
              />
              <input
                type="text"
                name="pincode"
                pattern="[0-9]{6}"
                maxLength="6"
                value={pincode}
                placeholder="Pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                required
              />
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-row space-x-3">
                  <input
                    type="text"
                    name="brands"
                    placeholder="Brands"
                    value={currentBrand}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    onChange={(e) => {
                      setCurrentBrand(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddBrands}
                    className="text-white bg-green-700 hover:bg-sky-500/50 px-3 py-1.5 rounded-lg"
                  >
                    Add
                  </button>
                </div>
                <div className="flex md:h-24 items-start flex-wrap border border-gray-200 p-1">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      onClick={() => handleRemoveBrand(index)}
                      className="mr-1 bg-gray-300 px-3 pb-1 rounded-lg my-1 text-gray-600"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-row space-x-3">
                  <input
                    type="text"
                    name="products"
                    placeholder="Products"
                    value={currentProduct}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    onChange={(e) => {
                      setCurrentProduct(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddProducts}
                    className="text-white bg-green-700 hover:bg-sky-500/50 px-3 py-1.5 rounded-lg"
                  >
                    Add
                  </button>
                </div>
                <div className="flex md:h-24 items-start flex-wrap border border-gray-200 p-1">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      onClick={() => handleRemoveProduct(index)}
                      className="mr-1 bg-gray-300 px-3 pb-1 rounded-lg my-1 text-gray-600"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-sky-500/50 px-3 py-1.5 rounded-lg"
                  onClick={onFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendors;
