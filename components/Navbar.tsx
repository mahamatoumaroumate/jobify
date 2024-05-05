import LinksDropDown from './LinksDropdown'
import { UserButton } from '@clerk/nextjs'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between '>
      <div>
        <LinksDropDown />
      </div>
      <div className='flex items-center gap-x-4'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default Navbar
