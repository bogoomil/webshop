package hu.boga.webshop.persistence.menu.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * @author user
 */
@Entity
@Table(name = "tetel")
@Data
public class TetelEntity {

  @Column(name = "ar", nullable = false)
  private int price;

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Lob
  @Column(name = "image", nullable = false, length = 100000)
  private String image;

  @ManyToOne
  @JoinColumn(name = "kategoriaId")
  private KategoriaEntity kategoria;

  @Column(name = "leiras")
  private String description;

  @Column(name = "megnevezes", nullable = false)
  private String name;

  @Column(name = "csomagolas")
  private Integer packagingFee;

}
