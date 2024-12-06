# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Dowload thu vien

Su dung cau lenh sau de tai node_module

```shellscript
npm install
```

## add san pham vao csdl

Tao co so dulieu my sql co ten la: testremix

```sh
CREATE DATABASE testremix;
```

Tiep theo mo terminal , tro den file du an va dung cau lenh

```sh
npx prisma migrate dev --name init
```

Tiep theo vao mysql va chay cau lenh:

```sh
INSERT INTO `product` (`id`, `name`, `description`, `price`, `image`, `createdAt`) VALUES (NULL, 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801XLC\r\n', 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801XLC\r\n', '3210000', 'https://product.hstatic.net/1000230642/product/hsm004801xlc-7_b04b277714894d7288870ca8b1df139b_master.jpg', '2024-12-03 14:47:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Midnight Edition HSM007503DEN\r\n', 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Midnight Edition HSM007503DEN\r\n', '1230000', 'https://product.hstatic.net/1000230642/product/hsm007503den-7_28fafb0b299f4b0e9744c1d24d0df891_master.jpg', '2024-12-03 14:47:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter Core LiteFoam 3.0 - Original Edition 2K24 HSM007801XAM\r\n', 'Giày Thể Thao Nam Biti’s Hunter Core LiteFoam 3.0 - Original Edition 2K24 HSM007801XAM\r\n', '852000', 'https://product.hstatic.net/1000230642/product/hsm007801xam-7_2635ef1ee15241d4821efae52c7148dd_master.jpg', '2024-12-11 10:19:23.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Original Edition 2K24 HSM007506DOD\r\n', 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Original Edition 2K24 HSM007506DOD\r\n', '1050000', 'https://product.hstatic.net/1000230642/product/hsm007506dod-7_81f41306f3e74b4c98473ffae30c4077_master.jpg', '2024-12-05 10:19:23.000000'), (NULL, 'Giày Thể Thao Nam Biti\'s Hunter Street HSM008600NAD\r\n', 'Giày Thể Thao Nam Biti\'s Hunter Street HSM008600NAD\r\n', '684000', 'https://product.hstatic.net/1000230642/product/hsm008600nad__2__aad7460df4a04103b37a4d391caf82be_master.jpg', '2024-12-06 10:24:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801CAM\r\n', 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801CAM\r\n', '12327000', 'https://product.hstatic.net/1000230642/product/hsm004801cam-7_d78e7e9261bf47f3a38b33be304223e1_master.jpg', '2024-12-06 10:24:31.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801XLC\r\n', 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801XLC\r\n', '3210000', 'https://product.hstatic.net/1000230642/product/hsm004801xlc-7_b04b277714894d7288870ca8b1df139b_master.jpg', '2024-12-03 14:47:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Midnight Edition HSM007503DEN\r\n', 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Midnight Edition HSM007503DEN\r\n', '1230000', 'https://product.hstatic.net/1000230642/product/hsm007503den-7_28fafb0b299f4b0e9744c1d24d0df891_master.jpg', '2024-12-03 14:47:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter Core LiteFoam 3.0 - Original Edition 2K24 HSM007801XAM\r\n', 'Giày Thể Thao Nam Biti’s Hunter Core LiteFoam 3.0 - Original Edition 2K24 HSM007801XAM\r\n', '852000', 'https://product.hstatic.net/1000230642/product/hsm007801xam-7_2635ef1ee15241d4821efae52c7148dd_master.jpg', '2024-12-11 10:19:23.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Original Edition 2K24 HSM007506DOD\r\n', 'Giày Thể Thao Nam Biti’s Hunter X LiteDash - Original Edition 2K24 HSM007506DOD\r\n', '1050000', 'https://product.hstatic.net/1000230642/product/hsm007506dod-7_81f41306f3e74b4c98473ffae30c4077_master.jpg', '2024-12-05 10:19:23.000000'), (NULL, 'Giày Thể Thao Nam Biti\'s Hunter Street HSM008600NAD\r\n', 'Giày Thể Thao Nam Biti\'s Hunter Street HSM008600NAD\r\n', '684000', 'https://product.hstatic.net/1000230642/product/hsm008600nad__2__aad7460df4a04103b37a4d391caf82be_master.jpg', '2024-12-06 10:24:05.000000'), (NULL, 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801CAM\r\n', 'Giày Thể Thao Nam Biti’s Hunter Running LiteDual - Original Edition 2K24 HSM004801CAM\r\n', '12327000', 'https://product.hstatic.net/1000230642/product/hsm004801cam-7_d78e7e9261bf47f3a38b33be304223e1_master.jpg', '2024-12-06 10:24:31.000000')
```

### Chay du an

Chay du an bang cau lenh duoi day:

```sh
npx run dev
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
