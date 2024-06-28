'use client'
import Container from "@/components/container";
import { title } from '@/components/primitives';
import Typewriter from '@/components/typewriter';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";
import axios from "axios"
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { downloadFile } from "@/lib/actions";
import { useDownloadState } from "@/hooks/use-download-state";
import { set } from "date-fns";

export const dynamic = 'force-dynamic';

interface HeroProps {
    data: any
}

const Hero : React.FC<HeroProps> = ({
    data: {avatar, roles, introduction, name, resume}
}) => {

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDownloadState();

  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  
  const onDownload = async () => {
    setLoading(true);
    await downloadFile(resume);
    setLoading(false);
  }

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
                  <Typewriter 
                    className={title({ color: 'cyan'})}
                    dataText={roles}
                  />
                </h1>
                <p className="px-6 md:px-0">{introduction}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-auto gap-2 items-center px-6">
                <Button variant={"secondary"} className="rounded-full" data-cal-namespace="" data-cal-link="princesharma74/book-an-appointment" data-cal-config='{"layout":"month_view"}'
                >
                Contact me
                </Button>
                <Button className="rounded-full" disabled={loading} onClick={onDownload}>
                  {loading ? 'Downloading...' : 'Download Resume'}
                </Button>
              </div>
            </Container>
      </main>
     );
}
 
export default Hero;