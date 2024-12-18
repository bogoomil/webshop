package hu.boga.webshop.persistence.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
  private int ar;

  @Id
  @Column(name = "id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "image_id")
  private ImageEntity imageEntity;

  @ManyToOne
  @JoinColumn(name = "kategoriaId")
  private KategoriaEntity kategoria;

  @Column(name = "leiras")
  private String leiras;

  @Column(name = "megnevezes", nullable = false)
  private String megnevezes;

  @Column(name = "csomagolas")
  private Integer csomagolasiDij;

}
