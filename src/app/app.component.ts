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
  private nextPos: string = null;

  private catergories: any = [
    {
      title: "Starter",
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
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const url = "https://csb-pkxw4-lisblciam.vercel.app/api";
    // const url = "https://csb-pkxw4-lisblciam.vercel.app/api";
    this.http.get(url).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  setCurrent(data) {
    const defaultIndex = 2;
    this.current = data;

    this.setCurrentCat(
      { ...this.catergories[defaultIndex], index: defaultIndex },
      defaultIndex
    );
    // this.activeCat = this.catergories[2];
    console.log(this.activeCat);
  }

  setCurrentCat(data: any, fututeIndex: number) {
    this.activeCat = { ...data, index: fututeIndex };
    // const offset = fututeIndex - this.activeCat.index;

    // console.log(offset);

    // if (offset < -1) {
    //   console.log("Animate right");
    // } else {
    //   console.log("Animate left");
    // }
  }

  removeOverlay() {
    // wait for animation before unmount
    // const delay = 400;
    const delay = 200;
    setTimeout(() => {
      this.setCurrent(null);
    }, delay);
  }

  randomImg() {
    return `https://i.picsum.photos/id/${Math.round(
      Math.random() * 1000
    )}/535/535.jpg`;
  }
}
