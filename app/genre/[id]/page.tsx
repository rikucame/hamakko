type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  console.log(params);
  return <h1>{params.id}</h1>;
}

export async function generateStaticParams() {
  return [{ id: "portrait" }, { id: "snap" }];
}
