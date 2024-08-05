'use client'
import { increment, selectCount } from "@/redux-store/features/counter/countreSlice";
import { useGetQuotesQuery } from "@/redux-store/features/quotes/quotesApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Post() {
    // const count = useAppSelector(selectCount);
    // const dispatch = useAppDispatch();
    // const {data, isError, isLoading, isSuccess } = useGetQuotesQuery(10,{
    //     pollingInterval: 2000
    // });
    // console.log("quotes",data)
    return (
        <div>
            <p>Post page</p>
           {/* <p>{count}</p>
           <button onClick={()=> dispatch(increment())}>incre</button> */}
            <Link href='/admin/create-post' className="absolute bottom-10 right-10">
                <div className="bg-white rounded-full opacity-80">
                    <CirclePlus className="w-16 h-16 hover:w-20 hover:h-20 hover:cursor-pointer transition-all duration-75 text-primary"/>
                </div>
            </Link>
        </div>
    )
}