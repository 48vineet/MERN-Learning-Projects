import RotatingText from "./RotatingText";
const Heading = () => {
    return ( 
    <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-gray-300 flex items-center gap-3 flex-wrap justify-center pt-6">
    <span> Welcome To State Weather Info</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      <RotatingText
        texts={['Rain', 'Foggy', 'Sunshine', 'Thunder', 'Cloudy' ]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-gray-700 text-blue-300 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </span>
  </h1>
  )

}

export default Heading;