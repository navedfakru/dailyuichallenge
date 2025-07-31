"use client"
import React from 'react';
import * as motion from 'motion/react-client';
import { url } from 'inspector';
import { FiUser } from "react-icons/fi";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { MdCalendarMonth } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";

/*
https://cdn.dribbble.com/userupload/29763836/file/original-b8d56bbec5b9951d29e1f693260ab5a8.jpg
*/

function page() {
  return (
    <div
      className='h-screen w-screen bg-gradient-to-l from-orange-200 via-green-400 to-yellow-600 flex items-center justify-center'
    >
      <div className='grid grid-cols-2 w-3/5 min-h-3/4'>
        <div
          className="relative overflow-hidden rounded-bl-2xl rounded-tl-2xl px-5 py-10"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(img/bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "blur(4px)",
              zIndex: 0,
            }} />
          <div className='relative z-10'>
            <h2 className='text-4xl text-white font-bold text-shadow-2xs'>Easy Payments EveryWhere</h2>
            <p className='mt-8 text-lg font-semibold'>Get "Cashback 20%" With Your Credit Card</p>
          </div>
        </div>
        <div className="bg-white text-black px-5 py-10 rounded-br-2xl rounded-tr-2xl">
          <h2 className='text-2xl font-bold '>Credit Card Payments</h2>
          <Input
            label='Cardholder Name'
            className="mt-10"
            defaultValue="John Doe"
            type='text'
            name='chname'
            icon={<FiUser className='text-black/60' />}
          />
          <Input
            label='Card Number'
            className="mt-5"
            defaultValue="XXXX-XXXX-XXXX-XXX"
            type='text'
            name='cardNumber'
            icon={<HiOutlineCreditCard className='text-black/60' />}
          />
          <p className='text-xs text-black/40'>Input number without space</p>
          <div className="flex flex-row gap-5 mt-10">
            <Input
              icon={<MdCalendarMonth className="text-black/60" />}
              defaultValue='10'
              label='Expiry Month'
              type='text'
              name='expirymonth'
            />
            <Input
              icon={<MdCalendarMonth className="text-black/60" />}
              defaultValue='2028'
              label='Expiry Year'
              type='text'
              name='expiryyear'
            />
            <Input
              icon={<IoLockClosedOutline className="text-black/60" />}
              defaultValue='789'
              label='CSV'
              type='text'
              name='csv'
            />
          </div>
          <div className='flex justify-between items-end mt-10'>
            <div>
              <p className='text-2xl text-black/90 font-medium'>Total:</p>
              <p className='text-2xl text-black font-semibold'>INR 15.000K</p>
            </div>
            <div className='bg-[#45312d] text-white text-lg font-medium py-2 px-8 rounded-md'>Pay</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page


type InputProps = {
  icon?: React.ReactNode;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;
};

function Input({
  icon = <FiUser className='text-black/60' />,
  name = "chName",
  defaultValue = "",
  placeholder = "",
  type = "text",
  className = "",
  label = "Cardholder Name",
}: InputProps) {
  return (
    <div
      className={`${className}`}
    >
      <p className='text-black/60 text-xs mb-2'>{label}</p>
      <div className={`flex flex-row items-center gap-2 px-2 py-1 border-black/40 border rounded-md`}>
        {icon}
        <input
          type={type}
          name={name}
          className='outline-none w-full'
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}