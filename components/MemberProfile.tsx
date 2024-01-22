import { auth, currentUser, UserButton } from "@clerk/nextjs";

export default async function MemberProfile() {
  const user = await currentUser();
  const { userId } = auth();
  const userEmail = user?.emailAddresses[0].emailAddress;
  const idx = userEmail?.indexOf("@");

  const profileCred = userEmail?.slice(0, idx);

  return (
    <div className="px-4 flex items-center gap-2">
      <UserButton afterSignOutUrl="/" />
      {/* <p>{user?.emailAddresses[0].emailAddress}</p> */}
      <p>{profileCred}</p>
    </div>
  );
}
