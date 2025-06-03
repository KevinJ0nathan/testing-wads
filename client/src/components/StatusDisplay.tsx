import { StatusType } from '../types/ticket'

interface Props {
    status: StatusType
}

const StatusDisplay = ({ status }: Props) => {
    const styles = {
        container: "px-2 py-1 rounded-md text-xs font-semibold w-fit ",
        "In Progress": "bg-blue-100 text-blue-600",
        "Completed": "bg-green-100 text-green-600",
        "Unseen": "bg-gray-100 text-gray-600"
    } as const;

    return (
        <div className={styles.container + styles[status]}>
            {status}
        </div>
    )
}

export default StatusDisplay