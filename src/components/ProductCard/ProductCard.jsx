function ProductCard({ title, id, userId }) {
  return (
    <tr class="bg-[#EEEEEE] border-b flex w-full justify-around">
      <td class="py-3 px-4">{id} </td>
      <td class="py-3 px-4">{userId}</td>
      <td class="py-3 px-4">{title}</td>
    </tr>
  );
}

export default ProductCard;
