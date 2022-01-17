import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

import IconClose from '@/components/Icon/IconClose'
import Slider from 'react-slick'

export default function ImagesModal({ images, open, onClose }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: '',
    variableWidth: true,
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        open={true}
        className="fixed inset-0 z-10"
        onClose={onClose}
      >
        <div className="relative flex items-center w-full h-full">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 transform"
            enterFrom="opacity-0 translate-y-16"
            enterTo="opacity-100"
            leave="ease-in duration-200 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-16"
          >
            <div className="relative w-full">
              <button
                onClick={onClose}
                className="absolute top-0 z-10 p-4 text-gray-500 transform -translate-y-1/2 border border-white rounded-full right-8"
              >
                <span className="sr-only">back to main content</span>
                <IconClose className="w-6 h-6" />
              </button>
              <div>
                <Slider {...settings}>
                  {images.map((image) => (
                    <img
                      key={`modal-${image.url}`}
                      className="h-[40vh] w-auto pl-8"
                      src={image.url}
                      alt={image.tag}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
