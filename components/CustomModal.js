import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function CustomModal({ isOpen, closeModal, data }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data.title}
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col">
                    <div className={"flex space-x-4"}>
                      <img
                        className={"rounded-lg"}
                        src={data.image}
                        alt={data.title}
                        width={100}
                        height={"auto"}
                      />
                      <div className={"flex flex-col justify-between"}>
                        <div>
                          <div className={"text-xl font-semibold"}>
                            {data.title}
                          </div>
                          <div className={"italic text-sm"}>
                            by {data.authors && data.authors.join(", ")}
                          </div>
                          <div className={"text-sm"}>{data.subtitle}</div>
                        </div>
                        <div>
                          <div className={"text-sm"}>{data.genre}</div>
                          <div className={"font-mono text-sm"}>
                            {data.publisher}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 max-h-24 overflow-auto mt-4">
                      {data.summary}
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <Link
                      href={`https://www.amazon.com/s?k=${encodeURIComponent(
                        data.title
                      )}`}
                      passHref
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Check on Amazon
                      </a>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
