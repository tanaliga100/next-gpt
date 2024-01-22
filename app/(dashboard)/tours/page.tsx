export default function Tours() {
  // const { isPending, isError, data } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     if (!res.ok) {
  //       throw new Error("Something went wrong");
  //     }
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // if (isPending) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>simething went wrong..</p>;
  // }
  return (
    <div>
      <h1>Chat Tours</h1>
      {/* {data?.data &&
        data.data.map((item: any) => {
          return <li key={item.id}>{item.title}</li>;
        })} */}
    </div>
  );
}
