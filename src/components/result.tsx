interface Props {
  children: any
}

const Result = (props: Props) => {
  return (
    <div className="mb-4">
      <div className="relative p-4 pt-8 font-medium text-center border-2 border-purple-200 bg-indigo-50 bg-opacity-20 rounded-xl">
        <h3 className="absolute top-0 px-2 mb-1 font-semibold bg-purple-200 rounded-b left-4">
          Here you are
        </h3>
        <p className="text-xl text-gray-700">{props.children}</p>
      </div>
    </div>
  )
}

export { Result }
