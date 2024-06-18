
export const RevenueCard = ({
   title,

   orderCount,
   amount
})  => {
    return <div className=" ml-2 bg-white rounded-md shadow-md p-5 ">
        <div className="text-gray-700 ">
            <div className="flex">
            <div>
              {title}
            </div>
            <div className=" ml-1 pt-1.5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
            </div>
        </div>
        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
                $ {amount}
            </div>
            {orderCount ? <div className="flex cursor-pointer text-blue-700 underline font-medium flex-col justify-center">
                <div className="flex">
                <div className="text-blue-700">
                {orderCount} Orders
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path className="text-blue-700" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div>
</div>
                </div> : null}
        </div>
    </div>
}