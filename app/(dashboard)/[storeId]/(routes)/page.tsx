import prismaDb from "@/lib/prisma-db"

interface DashboardPageProps {
  params: {
    storeId: string
  }
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismaDb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <h1>Active Store: {store?.name}</h1>
  )
}

export default DashboardPage