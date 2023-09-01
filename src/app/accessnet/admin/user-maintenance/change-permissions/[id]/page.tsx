import { getUserPermissions } from '@/ulitiles/db/getUserPermissions/getUserPermissions';
import { prisma } from '@/ulitiles/prisma/db';
import { Permissions, User } from '@prisma/client';
import { redirect } from 'next/navigation';

const changePermissions = async (data: FormData) => {
  'use server';
  let temp: Permissions | {} = {};
  let i = 0;
  //@ts-ignore
  for (let m of data.entries()) {
    if (i === 0) {
      i++;
      continue;
    }
    //@ts-ignore
    temp[m[0]] = m[1];
  }
  //@ts-ignore

  let usr = await prisma.user.findFirst({ where: { id: m[0] } });
  // let permExist?

  //needed function params: userID, form submittion including the permissions

  //check to see if permission permutation already exists
  //if not create the new permutation store the id field

  //find the user that is being changed
  //select the permissions id field and update it
  //redirect to success
};

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const permissionCheck = await getUserPermissions([
    'admin',
    'changeUser',
    'deleteUser',
  ]);
  if (!permissionCheck) {
    return redirect('/unauthorized');
  }

  const user = await prisma.user.findFirst({
    where: { id: id },
    include: { permissions: { include: {} } },
  });

  let perms = user?.permissions;
  let arr = [];
  for (let permition in perms) {
    //@ts-ignore
    arr.push({ [permition]: perms[permition] });
  }

  return (
    <form
      className="flex flex-1 flex-col items-center justify-center"
      action={changePermissions}
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-slate-200 rounded-2xl shadow-2xl p-4">
          {arr.map((x, i) => {
            console.log(x);
            if (i === 0) {
              return (
                <input
                  className="hidden"
                  name="id"
                  readOnly
                  value={x[Object.keys(x).toString()].toString()}
                />
              );
            }
            return (
              <>
                <div
                  key={Object.keys(x).toString()}
                  className="flex justify-between w-72"
                >
                  <div>{Object.keys(x).toString()}</div>
                  <select
                    name={Object.keys(x)[0]}
                    defaultValue={x[Object.keys(x).toString()].toString()}
                  >
                    <option value={'true'}>True</option>
                    <option value={'false'}>False</option>
                  </select>
                  <div>{x[Object.keys(x).toString()].toString()}</div>
                </div>
                <div className="divider "></div>
              </>
            );
          })}
          <div className="flex items-center justify-center w-full">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
