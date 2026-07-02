import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeWishlist } from "@/store/features/wishlistSlice";

interface Column {
  key: string;
  label: string;
}

interface tableProps {
  columns: Column[];
}

const Table = ({ columns }: tableProps) => {
  const dispatch = useDispatch();
  const wishlistItem = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveWishlist = (id: number) => {
    dispatch(removeWishlist(id));
  };

  return (
    <div className="overflow-x-auto rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-2 sm:px-5 py-4 text-xs sm:text-sm"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="w-full">
          {wishlistItem.length > 0 ? (
            wishlistItem.map((list) => (
              <tr key={list?.id} className="border border-gray-200">
                <td className="px-2 sm:px-5 py-4 text-xs sm:text-sm font-medium text-(--heading-color)">
                  <div className="w-10 sm:w-16 h-10 sm:h-16 rounded-xl overflow-hidden">
                    <Image
                      src={list.image}
                      alt={list?.name}
                      width={10}
                      height={10}
                      className="w-full object-cover"
                      layout="responsive"
                    />
                  </div>
                </td>
                <td className="px-2 sm:px-5 py-4 text-xs sm:text-sm font-medium text-(--heading-color)">
                  {list?.name}
                </td>
                <td className="px-2 sm:px-5 py-4 text-xs sm:text-sm font-medium">
                  ${list?.price}
                </td>
                <td
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    list.isStock
                      ? " text-green-700 font-semibold"
                      : " text-red-700"
                  }`}
                >
                  {list?.stock}
                </td>
                <td className="px-2 sm:px-5 py-4 text-xs sm:text-sm">
                  <button
                    onClick={() => handleRemoveWishlist(list.id)}
                    className="text-red-600 cursor-pointer"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-6 text-gray-500">
                No products added to the wishlist
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
