import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

interface ItemData {
  id: number;
  name: string;
  uomUnit: string;
  uomCount: number;
  unitCost: number;
}

@Component({
  selector: 'app-element-view',
  standalone: true,
  imports: [
    NzIconModule,
    NzDropDownModule,
    NzTableModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './element-view.component.html',
  styleUrl: './element-view.component.scss',
})
export class ElementViewComponent {
  data: any;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [
    { id: 1, name: 'Eggs', uomUnit: 'each', uomCount: 3, unitCost: 12 },
    {
      id: 2,
      name: 'Large Cups',
      uomUnit: 'cartoon',
      uomCount: 3,
      unitCost: 12,
    },
  ];
  setOfCheckedId = new Set<number>();

  constructor(private route: ActivatedRoute) {}

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }

  onEditPress(item: any): void {
    console.log({ item });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.data = JSON.parse(params.item);
    });
  }
}
