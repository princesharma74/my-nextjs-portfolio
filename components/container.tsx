import { cn } from "@/lib/utils";
interface ContainerProps {
    className ?: string,
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    className,
    children,
}) => {
    return ( 
        <section className={cn("flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10", className)}>
            {children}
        </section>
     );
}
 
export default Container;