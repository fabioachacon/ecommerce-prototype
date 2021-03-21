export const PageAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const Fade = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .65,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .65,
            ease: 'easeOut'
        }
    }
}

export const quickViewAnimation = {
    hidden: {
        opacity: 0,
        y: 0
    },
    visible: {
        opacity: 1,
        y: -10,
        transition: {
            durantion: 0.3,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
}