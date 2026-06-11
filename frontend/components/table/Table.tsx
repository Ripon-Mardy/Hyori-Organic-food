import Image from "next/image";
import { StaticImageData } from "next/image";

interface Column {
  key: string;
  label: string;
}

interface WishListItem {
  id: number;
  name: string;
  price: number;
  status: string;
  image: StaticImageData;
}

interface tableProps {
  columns: Column[];
  wishlist: WishListItem[];
}

const Table = ({ columns, wishlist }: tableProps) => {
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
          {wishlist.length > 0 ? (
            wishlist.map((list) => (
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
                    list.status === "In Stock"
                      ? " text-green-700 font-semibold"
                      : " text-red-700"
                  }`}
                >
                  {list?.status}
                </td>
                <td className="px-2 sm:px-5 py-4 text-xs sm:text-sm">Remove</td>
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
