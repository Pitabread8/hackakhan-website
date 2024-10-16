import Image from 'next/image'

const Photo = (props) => (
    <Image className={`w-full h-auto rounded-lg ${props.style}`}
        src={props.src}
        width={1000}
        height={1000}
        alt="HackaKhan Photograph"
    />
);

export default function Gallery() {
    let imgs = [];
    for (let i = 2; i <= 9; i++) {
        const url = `/photos/${i}.JPG`
        if (i === 4 || i === 5) {
            imgs.push(<Photo key={i.toString()} src={url} style="md:col-span-2" />);
        } else {
            imgs.push(<Photo key={i.toString()} src={url} style="md:col-span-1" />);
        }
    }
    return (
        <div className="bg-white dark:bg-black px-4 py-2.5">
            <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl">Photos from Previous Events</h2>
            <div className="bg-white p-4 rounded-lg grid md:grid-cols-2 gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                    {imgs.splice(0, 3)}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {imgs.splice(0, 3)}
                </div>
                {imgs.splice(0, 2)}
            </div>
        </div>
    );
}