interface Petition {
    id: number;
    title: string;
    status: string;
    keywords: string;
    createdAt: string;
    author: {
      id: string;
      firstName: string;
      middleName: string | null;
      lastName: string;
    };
    signatures: number;
  }
  export default Petition;