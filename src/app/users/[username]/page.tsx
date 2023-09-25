export default function Page({
  params,
  searchParams,
}: {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <p>
      Hello {params.username}! {JSON.stringify(searchParams)}
    </p>
  );
}
