
import {Socials} from "../components/Socials";
export const  Footer = () => {
  return (
      <footer className="bg-secondary py-12">
        <div className="contianer mx-auto" >
          <div className='flex flex-col items-center justify-between '>
            {/* socials*/}
            <Socials
                containerStyles='flex gap-x-6 max-auto xl:mx-0 mb-4'
                iconsStyles='text-primary text-[20px] dark:text-white/70
                hover:text-white dark:hover:text-primary transition-all '
                />
            {/*copyright*/}
              <div className='text-muted-foreground'>
                  Copyright &copy; Mohamed Ali Harroum.  All rights reserved.
              </div>
          </div>
        </div>
      </footer>

  );
}

