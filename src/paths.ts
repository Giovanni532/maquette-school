export const paths = {
    home: () => {
        return "/";
    },
    projets: () => {
        return "/projets";
    },
    projet: (id: string) => {
        return `/projets/${id}`;
    },
    contact: () => {
        return "/contact";
    },
    addProjet: () => {
        return "/add-projet";
    },
    accessibility: () => {
        return "/accessibilite";
    },
}