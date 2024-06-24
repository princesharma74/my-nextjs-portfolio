'use client'
import Container from "@/components/container";
import { title } from '@/components/primitives';
import Typewriter from '@/components/typewriter';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";
import axios from "axios"
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { downloadFile } from "@/lib/actions";

interface HeroProps {
    data: any
}

const Hero : React.FC<HeroProps> = ({
    data: {avatar, roles, introduction, name, resume}
}) => {

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

    return ( 
      <main>
            <Container>
              <div className=''>
                <Image
                  src={avatar}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className='inline-block max-w-lg text-center justify-center space-y-4'>
                  <h1 className={title()}>Hey folks, I&apos;m a <br/>
                  {/* <Typewriter 
                    className={title({ color: 'cyan'})}
                    dataText={roles}
                  /> */}
                </h1>
                <p></p>
                <p>{introduction}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant={"secondary"} className="rounded-full" data-cal-namespace="" data-cal-link="princesharma74/book-an-appointment" data-cal-config='{"layout":"month_view"}'
                >
                <span className="flex items-center gap-2">Book an Appointment</span>
                </Button>
                <Button className="rounded-full" onClick={() => downloadFile(resume)}>
                  Download Resume
                </Button>
              </div>
            </Container>
      </main>
     );
}
 
export default Hero;