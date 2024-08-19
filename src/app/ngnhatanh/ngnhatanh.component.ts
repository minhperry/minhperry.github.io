import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ngnhatanh',
  templateUrl: './ngnhatanh.component.html',
  styleUrl: './ngnhatanh.component.css'
})
export class NgnhatanhComponent implements OnInit {
  pdfSrc: string = '';
  nameMap: { [key: string]: string } = {
    'bc5cn': 'Bàn Có Năm Chỗ Ngồi',
    'ctx1vdtt': 'Cho Tôi Xin Một Vé Đi Tuổi Thơ'
  }
  title: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const filename = params['sach'];
      this.pdfSrc = `${filename}.pdf`; // Adjust the path to where your PDFs are stored
      this.title = this.nameMap[filename]
    });
  }
}
