import ProductCard from "../ProductCard/ProductCard";

const data = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto",
  },

  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla",
  },

  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut",
  },

  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit",
  },

  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque",
  },

  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae",
  },

  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
];

function ProductList() {
  return (
    <div class="container mx-auto w-full">
      <div class="overflow-x-auto w-full">
        <table class="min-w-full rounded-lg shadow-md flex justify-center items-center flex-col w-full green-2 ">
          <thead class="w-full flex">
            <tr class="flex bg-[#A91D3A] text-white w-full justify-between rounded-[10px]">
              <th class="w-1/3 p-3 px-4 text-center">id</th>
              <th class="w-1/3 p-3 px-4 text-center">userId</th>
              <th class="w-1/3 p-3 px-4  text-center">post</th>
            </tr>
          </thead>
          <tbody class="flex flex-col w-full mt-1 rounded-[10px] overflow-hidden tbody">
            {data.map((item) => (
              <ProductCard
                title={item.title.split(' ')[0]}
                userId={item.userId}
                id={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
