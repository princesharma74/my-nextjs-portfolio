import exp from 'constants';
import { button as buttonStyles } from "@nextui-org/theme";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

const ModalForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Purpose:', purpose);
    // Reset form fields
    setName('');
    setEmail('');
    setPurpose('');
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 items-center">
        <Link
                href='#templates'
                className={buttonStyles({ color: "default", radius: "full", variant: "shadow" })}
        >
        <span className="flex items-center gap-2">View Templates</span>
        </Link>
        <button
          id="updateProductButton"
          data-modal-target="updateProductModal"
          data-modal-toggle="updateProductModal"
          className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Download Resume
        </button>
      </div>

      {isModalOpen && (
        <div
          id="updateProductModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl">
            <div className="relative p-4 bg-white rounded-lg shadow sm:p-5 dark:bg-gray-800">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Request Resume
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="updateProductModal"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your email address"
                        required
                        />
                    </div>
                    </div>
                    <div>
                        <label
                            htmlFor="purpose"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Purpose
                        </label>
                        <textarea
                            name="purpose"
                            id="purpose"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your purpose"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <Button
                            type='submit'
                            className={`w-full ${buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}`}
                        >
                            Request Resume
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)}
</>
);
};

export default ModalForm;