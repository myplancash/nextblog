import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
      <li className="mt-4">
        <Link href={`/posts/${id}`} className="text-3xl font-semibold text-primary hover:text-secondary dark:text-white dark:hover:text-gray-300 hover:underline transition-all duration-300">
          {title}
        </Link>
        <br />
        <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{formattedDate}</p>
      </li>
    )
}
