const data = [
    {
      "id" : 17827782787676,
      "title": "HNG tech",
      "details": {
        "Category": "Web design",
        "Client": "ASU Company",
        "Project date": "01 March, 2020",
        "sub-title": "This is an example of portfolio detail",
        "Project URL": "www.example.com",
        "description": "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."

      },
      "images": [
        "assets/img/portfolio-details-1.jpg",
        "assets/img/portfolio-details-2.jpg",
        "assets/img/portfolio-details-3.jpg"
      ]
    },
   
    // Add more portfolio items as needed
  ]


  const renderAndPopulate = (title) => {
    const currentData = data.find(item => item.title.toLowerCase() === title.toLowerCase());
    if (currentData) {
      window.location.href = "/portfolio-details.html"
    }

  }
  