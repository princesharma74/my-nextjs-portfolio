import { cn } from "@/lib/utils";
interface ContainerProps {
    className ?: string,
    id?: string,
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    className,
    id,
    children,
}) => {
    return ( 
        <section id={id} className={cn("flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10", className)}>
            {children}
        </section>
     );
}
 
export default Container;