import Link from "next/link";
import Image from "next/image";
type WallData = {
  link: string;
  text: string;
  route: string;
};
export default function HomeCard({ link, text, route }: WallData) {
  return (
    <>
      <Link href={route}>
        <div className="overflow-hidden w-full h-full group cursor-pointer ">
          <div className="w-full min-h-[10rem] h-full lg:h-full relative">
            <Image
              alt={text}
              src={link}
              placeholder="blur"
              blurDataURL={
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAGAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD581q41PwrcaF4ct5oxpMlyzi3QuMyctuYknOdwX6DjFeiR6945jjVI/ElzEijCxrez4UdgOelFFfIubdOEmldq+y3uz9DjgcP7WpHl0TSWr/lXmf/2Q=="
              }
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover group-hover:scale-105  transition-transform transform-gpu duration-500 ease-out"
            />
            <div className="bg-[#2e2e2e87] font-mono grid place-items-center text-3xl font-bold w-full h-full  aspect-auto absolute top-0 left-0">
              {text}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
