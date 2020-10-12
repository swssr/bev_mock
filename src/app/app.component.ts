import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";

  private current: any = null;
  private data: any = [];

  private activeCat: any = null;

  private catergories: any = [
    {
      title: "Starters",
      items: [
        {
          name: "Starter 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Starter 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Starter 2",
          size: "Size",
          price: 300.0
        }
      ]
    },
    {
      title: "Salads",
      items: [
        {
          name: "Salads 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Salads 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Salads 2",
          size: "Size",
          price: 300.0
        }
      ]
    },
    {
      active: true,
      title: "Mains",
      items: [
        {
          name: "Main 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Main 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        },
        {
          name: "Main 3",
          size: "Size",
          price: 300.0
        }
      ]
    },
    {
      title: "Kids",
      items: [
        {
          name: "Item 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        }
      ]
    },
    {
      title: "Desert",
      items: [
        {
          name: "Item 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        }
      ]
    },
    {
      title: "Beverages",
      items: [
        {
          name: "Item 1",
          size: "Size",
          price: 200.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        },
        {
          name: "Item 2",
          size: "Size",
          price: 300.0
        }
      ]
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const url = "https://csb-7geii-awwwmjzbo.vercel.app/api";
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  setCurrent(data) {
    this.current = data;
    this.activeCat = this.catergories[2];
    console.log(this.activeCat);
  }

  setCurrentCat(data) {
    this.activeCat = data;
  }

  removeOverlay() {
    // wait for animation before unmount
    // const delay = 400;
    const delay = 200;
    setTimeout(() => {
      this.setCurrent(null);
    }, delay);
  }
}