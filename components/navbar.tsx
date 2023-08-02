import { UserButton } from '@clerk/nextjs'

import { NavbarRoutes } from '@/components/navbar-routes'

export const Navbar = () => {
  return (
    <div className='border-b'>
      <div className="flex items-center h-16 px-4">
        <div>store switcher</div>
        <NavbarRoutes className='mx-6' />
        <div className="flex items-center space-x-4 ml-auto">
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  )
}
